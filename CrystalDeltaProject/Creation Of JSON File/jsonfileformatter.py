import json

def create_movie_json():
    # List to store movie details
    movies = []

    # Ask for the number of movies
    num_movies = int(input("Enter the number of movies: "))

    for i in range(num_movies):
        print(f"\nEntering details for movie {i + 1}:")

        # Get movie details from user
        movie_id = input("Enter movie ID: ")
        name = input("Enter movie name: ")
        thumbnail_url = input("Enter thumbnail URL: ")
        rating = float(input("Enter movie rating (out of 10): "))
        user_rating = float(input("Enter user rating (out of 10): "))
        video_url = input("Enter video URL: ")

        # Append movie details as a dictionary to the list
        movies.append({
            "id": movie_id,
            "name": name,
            "thumbnail_url": thumbnail_url,
            "rating": rating,
            "user_rating": user_rating,
            "video_url": video_url
        })

    # Specify the filename for the JSON file
    filename = "movies.json"

    # Write the list of movies to a JSON file
    with open(filename, "w") as file:
        json.dump(movies, file, indent=4)

    print(f"\nMovie details saved to {filename}")

if __name__ == "__main__":
    create_movie_json()
