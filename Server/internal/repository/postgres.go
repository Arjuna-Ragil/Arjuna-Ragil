package repository

import (
	"log"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	gorm *gorm.DB
}

func ConnectDB() (*DB, error) {
	cfg := internal.LoadConfig()

	gormDB, err := gorm.Open(postgres.Open(cfg.DBURL), &gorm.Config{}); if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}

	log.Println("Connected to database")

	return &DB{gorm: gormDB}, nil
}

func (db *DB) Migrate() error {
	err := db.gorm.AutoMigrate(
		&domains.TechStack{},
		&domains.Exp{},
		&domains.Project{},
		&domains.Task{},
	)

	if err != nil {
		log.Fatalf("failed to migrate database: %v", err)	
	}

	log.Println("Database migrated")

	return nil
}