package services

import (
	"mime/multipart"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/repository"
)

type ExpService struct {
	ExpRepo *repository.ExpRepo
}

func NewExpService(expRepo *repository.ExpRepo) *ExpService {
	return &ExpService{ExpRepo: expRepo}
}

type ExpInput struct {
	ID uint `json:"id" form:"id"`
	Title string `json:"title" form:"title" binding:"required"`
	Description string `json:"description" form:"description" binding:"required"`
	Company string `json:"company" form:"company" binding:"required"`
	Period string `json:"period" form:"period" binding:"required"`
	Image string `json:"image"`
}

func (s *ExpService) AddExp(input *ExpInput, image *multipart.FileHeader) error{
	imageURL, err := s.ExpRepo.Upload(image); if err != nil {
		return err
	}
	expInfo := domains.Exp{
		Title: input.Title,
		Description: input.Description,
		Company: input.Company,
		Period: input.Period,
		Image: imageURL,
	}
	if err := s.ExpRepo.Create(&expInfo); err != nil {
		return err
	}
	return nil
}

func (s *ExpService) GetAllExp() ([]domains.Exp, error){
	exp, err := s.ExpRepo.GetAll(); if err != nil {
		return nil, err
	}
	return exp, nil
}

func (s *ExpService) GetExpByID(id uint) (domains.Exp, error){
	exp, err := s.ExpRepo.GetByID(id); if err != nil {
		return domains.Exp{}, err
	}
	return exp, nil
}

func (s *ExpService) UpdateExp(input *ExpInput) error{
	exp, err := s.ExpRepo.GetByID(input.ID); if err != nil {
		return err
	}
	exp.Title = input.Title
	exp.Description = input.Description
	exp.Company = input.Company
	exp.Period = input.Period
	if err := s.ExpRepo.Update(&exp); err != nil {
		return err
	}
	return nil
}

func (s *ExpService) DeleteExp(id uint) error{
	if err := s.ExpRepo.Delete(id); err != nil {
		return err
	}
	return nil
}