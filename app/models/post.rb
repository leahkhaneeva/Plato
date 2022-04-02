
class Post < ApplicationRecord
	  # scope :filter_by_starts_with, -> (content) { where("content like ?", "%#{content}%")}
		scope :filter_by_starts_with, -> (search) { where("name like :search or title like :search or content like :search", search: "%#{search}%")}
	  scope :filter_by_user, -> (user) { where user: user }
	  scope :filter_by_category, -> (category) { where category: category }
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
    mount_uploader :image, ImageUploader
    has_many :comments, :dependent => :destroy
		has_many :favorites, dependent: :destroy
			belongs_to :user
			belongs_to :category

end
