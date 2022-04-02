class CafesController < ApplicationController
      before_action :authenticate_user!, except: [:index, :show]
      before_action :set_post, only: %i[ show edit update destroy ]

      # GET /posts or /posts.json
      def index
        @posts = Post.where(category_id: 2)
      end
        # if params.has_key?(:category)
        #   @category = Category.find_by_name(params[:category])
        #   @posts = Post.where(category: @category)
        # else
        #   @posts = Post.all
        # end


      # GET /posts/1 or /posts/1.json
      def show
      end

      # GET /posts/new
      def new
        @post = Post.new
      end

      # GET /posts/1/edit
      def edit
      end

      # POST /posts or /posts.json
      def create
        @post = Post.new(post_params.merge(user_id: current_user.id))

        respond_to do |format|
          if @post.save
            format.html { redirect_to @post, notice: "Post was successfully created." }
            format.json { render :show, status: :created, location: @post }
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: @post.errors, status: :unprocessable_entity }
          end
        end
      end

      # PATCH/PUT /posts/1 or /posts/1.json
      def update
        respond_to do |format|
          if @post.update(post_params)
            format.html { redirect_to @post, notice: "Ура" }
            format.json { render :show, status: :ok, location: @post }
          else
            format.html { render :edit, status: :unprocessable_entity }
            format.json { render json: @post.errors, status: :unprocessable_entity }
          end
        end
      end

      # DELETE /posts/1 or /posts/1.json
      def destroy
        @post.destroy
        respond_to do |format|
          format.html { redirect_to posts_url, notice: "Увы" }
          format.json { head :no_content }
        end
      end

      private
      def filtering_params(params)
        params.slice(:user, :category, :starts_with)
      end
        # Use callbacks to share common setup or constraints between actions.
        def set_post
          @post = Post.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def post_params
          params.require(:post).permit(:name, :title, :content, :image, :category_id)
        end

    end
