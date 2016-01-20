class Admin::EntriesController < AdminController
  before_action :set_entry, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @entries = Entry.all
    respond_with(:admin, @entries)
  end

  def show
    respond_with(:admin, @entry)
  end

  def new
    @entry = ::Entry.new
    respond_with(:admin, @entry)
  end

  def edit
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.save
    respond_with(:admin, @entry)
  end

  def update
    @entry.update(entry_params)
    respond_with(:admin, @entry)
  end

  def destroy
    @entry.destroy
    respond_with(:admin, @entry)
  end

  private
    def set_entry
      @entry = Entry.find(params[:id])
    end

    def entry_params
      params.require(:entry).permit(:id, :title, :context, :description, :button_link, :button_text)
    end
end
