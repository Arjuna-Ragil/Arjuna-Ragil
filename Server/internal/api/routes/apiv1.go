package routes

import (
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/api/handlers"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/api/middlewares"
	"github.com/gin-gonic/gin"
)

type Deps struct {
	Config *internal.Config
	TS *handlers.TSHandler
	Auth *handlers.AuthHandler
}

func SetupV1Routes(r *gin.Engine, d Deps) {
	v1 := r.Group("/api/v1")
	{
		open := v1.Group("/open")
		{
			open.POST("/login", d.Auth.Login)
			open.GET("/ts", d.TS.GetAllTS)
		}

		protected := v1.Group("/protected")
		protected.Use(middlewares.AuthMiddleware(d.Config))
		{
			ts := protected.Group("/ts")
			{
				ts.POST("/", d.TS.AddTS)
				ts.PUT("/", d.TS.UpdateTS)
				ts.DELETE("/", d.TS.DeleteTS)
			}
		}
	}
}
