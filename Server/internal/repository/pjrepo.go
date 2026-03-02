package repository

import (
	"mime/multipart"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"
)

type PjRepo struct {
	DB     *DB
	Bucket *Bucket
}

func NewPjRepo(db *DB, bucket *Bucket) *PjRepo {
	return &PjRepo{DB: db, Bucket: bucket}
}

func (repo *PjRepo) Upload(file *multipart.FileHeader) (string, error) {
	return repo.Bucket.UploadFile(file, "project")
}

func (repo *PjRepo) Create(pj *domains.Project) error {
	return repo.DB.gorm.Create(pj).Error
}

func (repo *PjRepo) GetAll() ([]domains.Project, error) {
	var pj []domains.Project
	err := repo.DB.gorm.Preload("TechStacks").Find(&pj).Error
	return pj, err
}

func (repo *PjRepo) GetByID(id uint) (domains.Project, error) {
	var pj domains.Project
	err := repo.DB.gorm.Preload("TechStacks").First(&pj, id).Error
	return pj, err
}

func (repo *PjRepo) Update(pj *domains.Project) error {
	if err := repo.DB.gorm.Preload("TechStacks").Where("id = ?", pj.ID).Updates(pj).Error; err != nil {
		return err
	}
	err := repo.DB.gorm.Model(pj).Association("TechStacks").Replace(pj.TechStacks)
	return err
}

func (repo *PjRepo) Delete(id uint) error {
	err := repo.DB.gorm.Delete(&domains.Project{}, id).Error
	return err
}
