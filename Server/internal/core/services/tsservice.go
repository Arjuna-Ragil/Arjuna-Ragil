package services

import (
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

type TSInput struct{
	ID uint `json:"id"`
	Name string `json:"name" binding:"required"`
	Icon string `json:"icon"`
}

func (Serv *TSService) AddTS(input TSInput, icon *multipart.FileHeader) error {
	iconURL, err := Serv.TSRepo.Upload(icon)
	if err != nil {
		return err
	}
	TSInfo := domains.TechStack{
		Name: input.Name,
		Icon: iconURL,
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
	if err := Serv.TSRepo.Update(&TS); err != nil {
		return err
	}
	return nil
}

func (Serv *TSService) DeleteTS(input TSInput) error {
	if err := Serv.TSRepo.Delete(input.ID); err != nil {
		return err
	}
	return nil
}