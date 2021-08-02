class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  def create
    binding.pry
    Post.create(content: params[:content])
    redirect_to action: :index
  end

end
