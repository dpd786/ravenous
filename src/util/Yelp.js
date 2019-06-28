const apiKey = 'vNl_6VY8mD_-OYS8_9SvyN4qVe059fegxvy7Bm6zOP218aHlfuxhjm7EN1ULx6S0V3gAtg4jJCxnuMaCbZgVCY0Q3w53yywg5amkdQF5JuTg1G9K2sGtrUR9l1iKXHYx';

export const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                console.log(jsonResponse.businesses);//check object in console
                return jsonResponse.businesses.map(business => {
                    return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                    }
                    
                });
            }
        });
    }
};
