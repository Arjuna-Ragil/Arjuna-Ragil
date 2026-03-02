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
	Exp *handlers.ExpHandler
	PJ *handlers.PjHandler
}

func SetupV1Routes(r *gin.Engine, d Deps) {
	v1 := r.Group("/api/v1")
	{
		open := v1.Group("/open")
		{
			open.POST("/login", d.Auth.Login)
			open.GET("/ts", d.TS.GetAllTS)
			open.GET("/exp", d.Exp.GetAllExp)
			open.GET("/pj", d.PJ.GetAllPj)
		}

		protected := v1.Group("/protected")
		protected.Use(middlewares.AuthMiddleware(d.Config))
		{
			ts := protected.Group("/ts")
			{
				ts.POST("/add", d.TS.AddTS)
				ts.PUT("/update", d.TS.UpdateTS)
				ts.DELETE("/delete/:id", d.TS.DeleteTS)
			}
			exp := protected.Group("/exp")
			{
				exp.GET("/:id", d.Exp.GetExp)
				exp.POST("/add", d.Exp.AddNewExp)
				exp.PUT("/update", d.Exp.UpdateExp)
				exp.DELETE("/delete/:id", d.Exp.DeleteExp)
			}
			pj := protected.Group("/pj")
			{
				pj.GET("/:id", d.PJ.GetPJ)
				pj.POST("/add", d.PJ.AddPj)
				pj.PUT("/update", d.PJ.UpdatePj)
				pj.DELETE("/delete/:id", d.PJ.DeletePj)
			}
		}
	}
}
