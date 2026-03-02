package handlers

import (
	"net/http"
	"strconv"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/services"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/utils"
	"github.com/gin-gonic/gin"
)

type TSHandler struct {
	TSService *services.TSService
}

func NewTSHandler(tsService *services.TSService) *TSHandler{
	return &TSHandler{TSService: tsService}
}

func (handler *TSHandler) AddTS(c *gin.Context){
	var input services.TSInput
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	icon, err := c.FormFile("icon")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := handler.TSService.AddTS(input, icon); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	go utils.TriggerAISync()
	c.JSON(http.StatusOK, gin.H{"message": "Tech Stack added successfully"})
}

func (handler *TSHandler) GetAllTS(c *gin.Context){
	TS, err := handler.TSService.GetAllTS(); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, TS)
}

func (handler *TSHandler) UpdateTS(c *gin.Context){
	var input services.TSInput
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	icon, err := c.FormFile("icon")
	if err != nil && err != http.ErrMissingFile {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := handler.TSService.UpdateTS(input, icon); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	go utils.TriggerAISync()
	c.JSON(http.StatusOK, gin.H{"message": "Tech Stack updated successfully"})
}

func (handler *TSHandler) DeleteTS(c *gin.Context){
	id := c.Param("id")
	idUint, err := strconv.Atoi(id); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if err := handler.TSService.DeleteTS(uint(idUint)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	go utils.TriggerAISync()
	c.JSON(http.StatusOK, gin.H{"message": "Tech Stack deleted successfully"})
}