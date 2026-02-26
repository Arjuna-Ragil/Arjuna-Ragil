package services

import (
	"errors"
	"mime/multipart"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/repository"
)

type TSService struct {
	TSRepo *repository.TSRepo
}

func NewTSService(tsRepo *repository.TSRepo) *TSService{
	return &TSService{TSRepo: tsRepo}
}

type TSInput struct {
	ID       uint   `json:"id" form:"id"`
	Name     string `json:"name" form:"name" binding:"required"`
	Icon     string `json:"icon"`
	Category string `json:"category" form:"category"`
}

func (Serv *TSService) AddTS(input TSInput, icon *multipart.FileHeader) error {
	iconURL, err := Serv.TSRepo.Upload(icon)
	if err != nil {
		return err
	}
	TSInfo := domains.TechStack{
		Name:     input.Name,
		Icon:     iconURL,
		Category: input.Category,
	}

	if input.Name == "" {
		return errors.New("name is required")
	}
	if err := Serv.TSRepo.Create(&TSInfo); err != nil {
		return err
	}
	return nil
}

func (Serv *TSService) GetAllTS() ([]domains.TechStack, error) {
	TS, err := Serv.TSRepo.GetAll(); if err != nil {
		return nil, err
	}
	return TS, nil
}

func (Serv *TSService) UpdateTS(input TSInput) error {
	TS, err := Serv.TSRepo.GetByID(input.ID); if err != nil {
		return err
	}
	TS.Name = input.Name
	TS.Category = input.Category
	if err := Serv.TSRepo.Update(&TS); err != nil {
		return err
	}
	return nil
}

func (Serv *TSService) DeleteTS(id uint) error {
	if err := Serv.TSRepo.Delete(id); err != nil {
		return err
	}
	return nil
}