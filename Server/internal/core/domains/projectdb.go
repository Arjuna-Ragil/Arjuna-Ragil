package domains

type Project struct {
	ID uint `gorm:"primaryKey; autoIncrement" json:"id"`
	Title string `gorm:"not null" json:"title"`
	Description string `gorm:"not null" json:"description"`
	Image string `gorm:"not null" json:"image"`
	Demo string `gorm:"not null" json:"demo"`
	Github string `gorm:"not null" json:"github"`
	TechStacks []ProjectTS `gorm:"foreignKey:ProjectID" json:"tech_stacks"`
}

type ProjectTS struct {
	ID uint `gorm:"primaryKey; autoIncrement" json:"id"`
	ProjectID uint `gorm:"not null" json:"project_id"`
	TechStackID uint `gorm:"not null" json:"tech_stack_id"`
	TechStack TechStack `gorm:"foreignKey:TechStackID" json:"tech_stack"`
}