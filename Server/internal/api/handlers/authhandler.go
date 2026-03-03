package handlers

import (
	"log"
	"net/http"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/services"
	"github.com/gin-gonic/gin"
)

type AuthHandler struct {
	AuthService services.AuthConfig
}

func NewAuthHandler(authService services.AuthConfig) *AuthHandler {
	return &AuthHandler{AuthService: authService}
}

func (h *AuthHandler) Login(c *gin.Context) {
	var input services.LoginInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	log.Printf("📝 REQUEST MASUK -> Username: '%s' | Password Length: %d\n", input.Username, len(input.Password))
	token, err := h.AuthService.LoginService(&input); if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"token": token})
}
