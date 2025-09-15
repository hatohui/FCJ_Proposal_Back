package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	var count = 0
	
	router.GET("/ping", func(c *gin.Context) {
		count++
		c.JSON(http.StatusOK, gin.H{
			"message": "pong " + fmt.Sprint(count),	
		})
	})

	router.Run(":8085")
}