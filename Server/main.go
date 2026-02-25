package main

import (
	"fmt"
	"log"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/api/handlers"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/api/routes"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/services"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/repository"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	cfg := internal.LoadConfig()

	if cfg.AppEnv == "production"{
		gin.SetMode(gin.ReleaseMode)
	}

	db, err := repository.ConnectDB()
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}

	if err := db.Migrate(); err != nil {
		log.Fatalf("failed to migrate database: %v", err)
	}

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	deps := SetupApp(db)

	routes.SetupV1Routes(r, deps)

	serverPath := fmt.Sprintf(":%s", cfg.Port)
	if err := r.Run(serverPath); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func SetupApp(db *repository.DB) routes.Deps{
	tsRepo := repository.NewTSRepo(db)
	tsService := services.NewTSService(tsRepo)
	tsHandler := handlers.NewTSHandler(tsService)

	return routes.Deps{
		TS: tsHandler,
	}
}