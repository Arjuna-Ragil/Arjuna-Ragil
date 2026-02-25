package domains

type TechStack struct {
	ID uint `gorm:"primaryKey; autoIncrement" json:"id"`
	Name string `gorm:"not null" json:"name"`
	Icon string `gorm:"not null" json:"icon"`
}