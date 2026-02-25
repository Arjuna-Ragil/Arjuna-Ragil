package repository

import "github.com/Arjuna-Ragil/Arjuna-Ragil/internal/core/domains"

type TSRepo struct {
	DB *DB
}

func NewTSRepo(db *DB) *TSRepo {
	return &TSRepo{DB: db}
}

func (repo *TSRepo) Create(ts *domains.TechStack) error {
	return repo.DB.gorm.Create(ts).Error
}

func (repo *TSRepo) GetAll() ([]domains.TechStack, error) {
	var ts []domains.TechStack
	err := repo.DB.gorm.Find(&ts).Error
	return ts, err
}

func (repo *TSRepo) GetByID(id uint) (domains.TechStack, error) {
	var ts domains.TechStack
	err := repo.DB.gorm.First(&ts, id).Error
	return ts, err
}

func (repo *TSRepo) Update(ts *domains.TechStack) error {
	err := repo.DB.gorm.Save(ts).Error
	return err
}

func (repo *TSRepo) Delete(id uint) error {
	err := repo.DB.gorm.Delete(&domains.TechStack{}, id).Error
	return err
}