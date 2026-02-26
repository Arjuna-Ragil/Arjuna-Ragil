package domains

type Project struct {
	ID uint `gorm:"primaryKey; autoIncrement" json:"id"`
	Title string `gorm:"not null" json:"title"`
	Description string `gorm:"not null" json:"description"`
	Image string `gorm:"not null" json:"image"`
	Demo string `gorm:"not null" json:"demo"`
	Github string `gorm:"not null" json:"github"`
	TechStacks []TechStack `gorm:"many2many:project_tech_stacks;constraint:OnDelete:CASCADE" json:"tech_stacks"`
}
