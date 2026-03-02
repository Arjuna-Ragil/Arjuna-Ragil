package utils

import (
	"fmt"
	"net/http"
	"os"
)

func TriggerAISync() {
	AI_URL := os.Getenv("AI_URL")

	var url string

	if AI_URL == "" {
		url = "http://localhost:8081/api/v1/sync"
	} else {
		url = fmt.Sprintf("http://%s/api/v1/sync", AI_URL)
	}
	res, err := http.Post(url, "application/json", nil); if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	if res.StatusCode == http.StatusOK {
		fmt.Println("AI Synced Successfully")
	} else {
		fmt.Println("Failed to sync AI")
	}
}