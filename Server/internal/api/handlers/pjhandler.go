package handlers

import (
	"net/http"
	"strconv"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/services"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/utils"
	"github.com/gin-gonic/gin"
)

type PjHandler struct {
	PJService *services.PjService
}

func NewPjHandler(pjService *services.PjService) *PjHandler {
	return &PjHandler{PJService: pjService}
}

func (h *PjHandler) AddPj(c *gin.Context) {
	var input services.PjInput
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	image, err := c.FormFile("image"); if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.PJService.AddPj(input, image); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	go utils.TriggerAISync()
	c.JSON(http.StatusOK, gin.H{"message": "Project added successfully"})
}

func (h *PjHandler) GetPJ(c *gin.Context){
	id := c.Param("id")
	idUint, err := strconv.Atoi(id); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	Pj, err := h.PJService.GetByID(uint(idUint)); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, Pj)
}

func (h *PjHandler) GetAllPj(c *gin.Context) {
	Pj, err := h.PJService.GetAllPj(); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, Pj)
}

func (h *PjHandler) UpdatePj(c *gin.Context) {
	var input services.PjInput
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	image, err := c.FormFile("image")
	if err != nil && err != http.ErrMissingFile {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.PJService.UpdatePj(input, image); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	go utils.TriggerAISync()
	c.JSON(http.StatusOK, gin.H{"message": "Project updated successfully"})
}

func (h *PjHandler) DeletePj(c *gin.Context) {
	id := c.Param("id")
	idUint, err := strconv.Atoi(id); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if err := h.PJService.DeletePj(uint(idUint)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	go utils.TriggerAISync()
	c.JSON(http.StatusOK, gin.H{"message": "Project deleted successfully"})
}