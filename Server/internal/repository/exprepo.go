package repository

import (
	"mime/multipart"

	"github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"
)

type ExpRepo struct {
	DB *DB
	Bucket *Bucket
}

func NewExpRepo(db *DB, bucket *Bucket) *ExpRepo{
	return &ExpRepo{DB: db, Bucket: bucket}
}

func (r *ExpRepo) Upload(file *multipart.FileHeader) (string, error) {
	return r.Bucket.UploadFile(file, "experience")
}

func (r *ExpRepo) Create(exp *domains.Exp) error {
	if err := r.DB.gorm.Create(exp).Error; err != nil {
		return err
	}
	return nil
}

func (r *ExpRepo) GetAll() ([]domains.Exp, error) {
	var exp []domains.Exp
	err := r.DB.gorm.Preload("Tasks").Find(&exp).Error
	return exp, err
}

func (r *ExpRepo) GetByID(id uint) (domains.Exp, error) {
	var exp domains.Exp
	err := r.DB.gorm.Preload("Tasks").First(&exp, id).Error
	return exp, err
}

func (r *ExpRepo) Update(exp *domains.Exp) error {
	if err := r.DB.gorm.Where("exp_id = ?", exp.ID).Delete(&domains.Task{}).Error; err != nil {
		return err
	}
	err := r.DB.gorm.Preload("Tasks").Save(exp).Error
	if err != nil {
		return err
	}
	return nil
}

func (r *ExpRepo) Delete(id uint) error {
	err := r.DB.gorm.Delete(&domains.Exp{}, id).Error
	return err
}
