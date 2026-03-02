package services

import (
	"errors"
	"time"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal"
	"github.com/golang-jwt/jwt/v5"
)

type AuthConfig struct {
	cfg *internal.Config
}

func NewAuthConfig(cfg *internal.Config) *AuthConfig {
	return &AuthConfig{cfg: cfg}
}

type LoginInput struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func (auth *AuthConfig) LoginService(input *LoginInput) (string, error) {
	if input.Username != auth.cfg.Username || input.Password != auth.cfg.Password {
		return "", errors.New("invalid credentials")
	}
	
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"exp": time.Now().Add(time.Hour * 48).Unix(),
	})
	tokenString, err := token.SignedString([]byte(auth.cfg.SecretKey)); if err != nil {
		return "", err
	}
	return tokenString, nil
}