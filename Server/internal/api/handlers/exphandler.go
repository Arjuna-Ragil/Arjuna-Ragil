package handlers

import (
	"net/http"
	"strconv"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/services"
	"github.com/gin-gonic/gin"
)

type ExpHandler struct {
	ExpService *services.ExpService
}

func NewExpHandler(expService *services.ExpService) *ExpHandler{
	return &ExpHandler{ExpService: expService}
}

func (h *ExpHandler) AddNewExp(c *gin.Context){
	image, err := c.FormFile("image"); if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var input services.ExpInput
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.ExpService.AddExp(&input, image); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Experience added successfully"})
}

func (h *ExpHandler) GetAllExp(c *gin.Context){
	exp, err := h.ExpService.GetAllExp(); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, exp)
}

func (h *ExpHandler) GetExp(c *gin.Context){
	id := c.Param("id")
	idUint, err := strconv.Atoi(id); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	exp, err := h.ExpService.GetExpByID(uint(idUint)); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, exp)
}

func (h *ExpHandler) UpdateExp(c *gin.Context){
	var input services.ExpInput
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	image, err := c.FormFile("image"); 
	if err != nil && err != http.ErrMissingFile {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.ExpService.UpdateExp(&input, image); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Experience updated successfully"})
}

func (h *ExpHandler) DeleteExp(c *gin.Context){
	id := c.Param("id")
	idUint, err := strconv.Atoi(id); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if err := h.ExpService.DeleteExp(uint(idUint)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Experience deleted successfully"})
}