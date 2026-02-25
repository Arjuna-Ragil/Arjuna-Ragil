package domains

type Exp struct {
	ID uint `gorm:"primaryKey; autoIncrement" json:"id"`
	Title string `gorm:"not null" json:"title"`
	Description string `gorm:"not null" json:"description"`
	Period string `gorm:"not null" json:"period"`
	Image string `gorm:"not null" json:"image"`
	Tasks []Task `gorm:"foreignKey:ExpID" json:"tasks"`
}

type Task struct {
	ID uint `gorm:"primaryKey; autoIncrement" json:"id"`
	ExpID uint `gorm:"not null" json:"exp_id"`
	Description string `gorm:"not null" json:"description"`
}