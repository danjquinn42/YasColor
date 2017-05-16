class Api::TagsController < ApplicationController

 def show
 end

 def create
   @tag = Tag.new(tag_params)
   unless @tag.save
     render json: @tag.errors.full_messages, status: 401
   end
 end

 def update
   @tag = Tag.find(params[:id])
   if @tag.update(tag_params)
     render :show
   else
     render json: @tag.errors.full_messages, status: 422
   end
 end

 private

 def tag_params
   params.require(:tag).permit(:title, :theme)
 end

end
