package internal

import (
	"fmt"
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	AppEnv string
	Port   string
	DBURL  string
}

func LoadConfig() Config {
	err := godotenv.Load("../.env")
	if err != nil {
		fmt.Println("No .env file found, using system environment")
	}
	return Config{
		AppEnv:     getEnv("APP_ENV", "local"),
		Port:       getEnv("PORT", "8080"),
		DBURL: "host=" + getEnv("DB_HOST", "localhost") +
			" user=" + getEnv("DB_USER", "postgres") +
			" password=" + getEnv("DB_PASSWORD", "password") +
			" dbname=" + getEnv("DB_NAME", "Porto_DB") +
			" port=" + getEnv("DB_PORT", "5432") +
			" sslmode=disable TimeZone=Asia/Jakarta",
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}