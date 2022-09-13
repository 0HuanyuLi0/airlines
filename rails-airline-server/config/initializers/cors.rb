# THIS DOCUMENT IS COPIED ACROSS FROM THE REACT-SECRETS-FRONEND CLASSWORK
# - if we don't need it, we can always delete it.

Rails.application.config.middleware.insert_before 0, Rack::Cors do

    allow do
        origins '*' # set CORS header
        resource '*', headers: :any, methods: [:get, :post, :patch, :put] 
        #handle OPTIONS requests from axios.post() "pre-flight" check
    end

end