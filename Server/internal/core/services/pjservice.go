package services

import (
	"mime/multipart"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"
	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/repository"
)

type PjService struct {
	PjRepo *repository.PjRepo
	TSRepo *repository.TSRepo
}

func NewPjService(pjRepo *repository.PjRepo, tsRepo *repository.TSRepo) *PjService {
	return &PjService{PjRepo: pjRepo, TSRepo: tsRepo}
}

type PjInput struct {
	ID uint `json:"id" form:"id"`
	Title string `json:"title" form:"title" binding:"required"`
	Description string `json:"description" form:"description"`
	Image string `json:"image"`
	Demo string `json:"demo" form:"demo"`
	Github string `json:"github" form:"github"`
	TechStacks []uint `json:"tech_stacks" form:"tech_stacks"`
}

func (s *PjService) AddPj(input PjInput, image *multipart.FileHeader) error {
	imageURL, err := s.PjRepo.Upload(image); if err != nil {
		return err
	}
	techstacks, err := s.TSRepo.GetByIds(input.TechStacks); if err != nil {
		return err
	}
	pjInfo := domains.Project{
		Title: input.Title,
		Description: input.Description,
		Image: imageURL,
		Demo: input.Demo,
		Github: input.Github,
		TechStacks: techstacks,
	}
	if err := s.PjRepo.Create(&pjInfo); err != nil {
		return err
	}
	return nil
}

func (s *PjService) GetAllPj() ([]domains.Project, error) {
	Pj, err := s.PjRepo.GetAll(); if err != nil{
		return nil, err
	}
	return Pj, nil
}

func (s *PjService) GetByID(id uint) (domains.Project, error) {
	Pj, err := s.PjRepo.GetByID(id); if err != nil {
		return domains.Project{}, err
	}
	return Pj, nil
}

func (s *PjService) UpdatePj(input PjInput, image *multipart.FileHeader) error {
	var imageURL string
	var err error
	if image != nil {
		imageURL, err = s.PjRepo.Upload(image); if err != nil {
			return err
		}
	}
	techstacks, err := s.TSRepo.GetByIds(input.TechStacks); if err != nil {
		return err
	}
	pjInfo := domains.Project{
		ID: input.ID,
		Title: input.Title,
		Description: input.Description,
		Image: imageURL,
		Demo: input.Demo,
		Github: input.Github,
		TechStacks: techstacks,
	}
	if err := s.PjRepo.Update(&pjInfo); err != nil {
		return err
	}
	return nil
}

func (s *PjService) DeletePj(id uint) error {
	if err := s.PjRepo.Delete(id); err != nil {
		return err
	}
	return nil
}


