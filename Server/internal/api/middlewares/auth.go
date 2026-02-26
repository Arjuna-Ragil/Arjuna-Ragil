package middlewares

import (
	"fmt"
	"strings"
	"time"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func AuthMiddleware(cfg *internal.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenString, err := c.Cookie("authorization")
		if tokenString == "" {
			authHeader := c.GetHeader("Authorization")
			if authHeader == "" {
				c.JSON(401, gin.H{
					"message": "Authorization header not found",
					"data":    err.Error(),
				})
				c.Abort()
				return
			}
			parts := strings.Split(authHeader, " ")
			if len(parts) == 2 {
				tokenString = parts[1]
			} else {
				tokenString = authHeader
			}
		}

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("method unknown")
			}
			return []byte(cfg.SecretKey), nil
		})

		if err != nil || !token.Valid {
			c.JSON(401, gin.H{
				"message": "Invalid token",
				"data":    err.Error(),
			})
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			if float64(time.Now().Unix()) > claims["exp"].(float64) {
				c.JSON(401, gin.H{
					"message": "Token expired",
					"data":    err,
				})
				return
			}
			c.Next()
		} else {
			c.JSON(401, gin.H{
				"message": "Invalid token",
				"data":    err,
			})
			return
		}
	}
}