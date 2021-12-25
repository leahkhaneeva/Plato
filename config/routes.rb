Rails.application.routes.draw do
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users

  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
	post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  resources :subscribers
  get 'about/index'
  get 'promo/index'

  resources :posts do
    resources :comments
    resources :favorites
  end

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'

  get 'users/:id/following', :to => "users#following", :as => :following

  get 'posts/index'

  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'



  root 'posts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
