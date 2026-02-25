package routes

import (
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/api/handlers"
	"github.com/gin-gonic/gin"
)

type Deps struct {
	TS *handlers.TSHandler
}

func SetupV1Routes(r *gin.Engine, d Deps) {
	v1 := r.Group("/api/v1")
	{
		tsv1 := v1.Group("/ts")
		{
			tsv1.POST("/add", d.TS.AddTS)
			tsv1.GET("/get", d.TS.GetAllTS)
			tsv1.PUT("/update", d.TS.UpdateTS)
			tsv1.DELETE("/delete", d.TS.DeleteTS)
		}
	}
}
