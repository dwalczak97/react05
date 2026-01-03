Zadanie domowe 5



Utwórz repozytorium o nazwie goit-react-hw-05.
W pracy domowej przekaż dwa linki: jeden do plików źródłowych i jeden do strony roboczej zadania na Vercel.
Projekt powinien zostać utworzony przy użyciu Vite.
Podczas uruchamiania kodu zadania w konsoli nie powinny pojawiać się żadne błędy ani ostrzeżenia.
Każdy komponent musi mieć swój własny plik w folderze src/components.
Każda strona musi mieć swój własny plik w folderze src/pages.
Aby wyeksportować komponenty, użyj domyślnego eksportu (export default).
Kod JS powinien być czysty i zrozumiały, użyj Prettier.
Stylizacja powinna być wykonana za pomocą modułów CSS.


Wyszukiwanie filmów



Napisz aplikację z routingiem do wyszukiwania filmów według nazwy. Obejrzyj film demonstracyjny aplikacji.





Usługa wyszukiwania filmów



W tym zadaniu użyjesz żądań HTTP do pobrania filmów z usługi TMDB. Zarejestruj konto (możesz podać dowolne dane), aby uzyskać dostęp do dokumentacji i klucz dostępu do żądań HTTP.



Przydatne sekcje dokumentacji:

Trending movies — lista najpopularniejszych obecnie filmów, dzięki której utworzysz kolekcję na stronie głównej.
Search movie — wyszukiwanie filmu według słowa kluczowego na stronie filmów.
Movie details — żądanie pełnych szczegółów filmu na stronie filmu.
Movie credits — żądanie informacji o obsadzie filmu na stronie filmu.
Movie reviews — żądanie recenzji dla strony filmu.


Token dostępu



Token dostępu musi być zawarty w każdym żądaniu jako nagłówek HTTP Authorisation, oto przykład:



const url = '<https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1>';

const options = {
  headers: {
		// Zamiast api_read_access_token wstaw własny token
    Authorization: 'Bearer api_read_access_token'
  }
};

axios.get(url, options)
  .then(response =>
 console.log(response))
  .catch(err => console.error(err));



Token dostępu jest uzyskiwany z sekcji "API Read Access Token" na stronie API.






Ścieżka do obrazów



Zamiast pełnego linku do obrazu, na przykład plakatu filmowego, backend będzie wysyłać poniższe ciągi, tj. tylko nazwę pliku:



/1E5baAaEse26fej7uHcjOgEE2t2.jpg



Aby utworzyć pełną ścieżkę do obrazu, musisz przeczytać sekcję dokumentacji, poświęconą temu zagadnieniu.



Krótko mówiąc, należy ręcznie dodać ścieżkę przed nazwą obrazu. W rezultacie otrzymasz pełnoprawny link do obrazu.



<https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg>



Nawigacja w aplikacji



Do nawigacji używana jest biblioteka React Router. Aplikacja musi mieć następujące ścieżki:

'/' – komponent HomePage, strona główna z listą popularnych filmów.
'/movies' – komponent MoviesPage, strona wyszukiwania filmów według słów kluczowych.
'/movies/:movieId' – komponent MovieDetailsPage, strona ze szczegółowymi informacjami o filmie.
/movies/:movieId/cast – komponent MovieCast, informacje o obsadzie. Jest renderowany na dole strony MovieDetailsPage.
/movies/:movieId/reviews – komponent MovieReviews, informacje o recenzjach. Jest renderowany w dolnej części strony MovieDetailsPage.
Jeśli użytkownik przyszedł nieistniejącą trasą, należy wyświetlić komponent NotFoundPage, który posiada Link do strony głównej.
Pliki, foldery i komponenty:

Pliki komponentów stron takich jak HomePage, MoviesPage, MovieDetailsPage, NotFoundPage powinny być w folderze src/pages.
Komponenty MovieCast і MovieReviews nie są oddzielnymi stronami, są tylko częściami strony MovieDetailsPage, więc pliki tych komponentów są przechowywane w src/components.
Menu z linkami nawigacyjnymi należy przenieść do komponentu Navigation. Składa się on z dwóch komponentów NavLink, które wskazują na ścieżki / і /movies.
Aby wyświetlić listę filmów, utwórz komponent MovieList. Użyj go na stronach HomePage і MoviesPage.


Rozdzielenie kodu



Dodaj asynchroniczne ładowanie kodu JS dla ścieżek aplikacji przy użyciu React.lazy i Suspense.



Kryteria



main.jsx zawiera BrowserRouter;
Sprawdź, czy istnieje folder components i pages;
pages zawiera wymagane komponenty HomePage, MoviesPage, MovieDetailsPage;
Powinien być komponent NotFoundPage — zalecane;
components zawiera komponenty App, MovieCast, MovieReviews, Navigation, MovieList.


App

Dostępna jest konfiguracja routingu — komponenty Routes i Route. Sprawdzanie path, i odpowiadające jej elements.

'/' – komponent HomePage, strona główna z listą popularnych filmów.
'/movies' – komponent MoviesPage, strona wyszukiwania filmów według słów kluczowych.
'/movies/:movieId' – komponent MovieDetailsPage, strona ze szczegółowymi informacjami o filmie.
cast – komponent MovieCast, informacje o obsadzie. Jest renderowany na dole strony MovieDetailsPage.
reviews – komponent MovieReviews, informacje o recenzjach. Jest renderowany na dole strony MovieDetailsPage.


Wykorzystano React.lazy i Suspense.
Brak tych kryteriów uważamy za błąd krytyczny.
Obecny jest komponent Navigation.


Navigation

Zawiera 2 komponenty Navlink
Pierwszy prowadzi do /
Drugi prowadzi do /movies


page/HomePage

Używa useEffect do wyszukiwania popularnych filmów podczas montowania komponentu.
Ma stan dla popularnych filmów — wymagane.
Ma stan dla programu ładującego i błędów — ulepszenie.
Zawiera komponent MovieList, który przyjmuje tablicę filmów jako atrybut i jest renderowany pod warunkiem, że w tablicy znajduje się co najmniej 1 element.


pages/MoviesPage

Posiada stan dla filmów — wymagane.
Ma stan dla programu ładującego i błędów — ulepszenie.
Zawiera komponent MovieList, który przyjmuje tablicę filmów jako atrybut i jest renderowany pod warunkiem, że w tablicy znajduje się co najmniej 1 element.
Funkcja, która zmienia wartość parametru po przesłaniu przy użyciu metody pochodzącej z hooka useSearchParams (dodać do zadania technicznego).
W celu wysłania żądania do backendu używa się useEffect podczas zmiany wartości z useSearchParams.


component/MovieList

Zawiera kolekcję komponentów Link z właściwością to і wartością '/movies/:movieId', zawiera właściwość state wartością którego będzie location.
Używany jest hook useLocation.


pages/MovieDetailsPage

Posiada stan dla szczegółów filmów — wymagane.
Posiada stan dla programu ładującego i błędów — ulepszenie.
Użyto hooka useParams w celu otrzymania wartości movieId.
Użyto useEffect, który jest uruchamiany po zmianie movieId, co powoduje wykonanie zapytania.
Zagnieżdżona nawigacja
Navlink z właściwością to, która ma wartość cast.
Navlink z właściwością to, która ma wartość reviews.
Zawiera komponent Outlet do wyświetlania zagnieżdżonych ścieżek.
Użyto hooka useLocation.
Użyto hooka useRef, który jest inicjowany wartością location.state
Zawiera komponent Link do powrotu z właściwością to z wartością current w wyniku wywołania useRef lub /movies.


components/MovieCast

Użyto hooka useParams w celu otrzymania wartości movieId.
Użyto useEffect, który jest uruchamiany po zmianie movieId, co powoduje wykonanie zapytania.
Posiada stan dla obsady filmowej — wymagane.
Posiada stan dla programu ładującego i błędów — ulepszenie.
Jeśli informacje nie zostały otrzymane, wyświetlany jest komunikat o braku informacji.


components/MovieReviews

Użyto hooka useParams w celu otrzymania wartości movieId.
Użyto useEffect, który jest uruchamiany po zmianie movieId, co powoduje wykonanie zapytania.
Posiada stan dla recenzji filmów — wymagane.
Posiada stan dla programu ładującego i błędów — ulepszenie.
Jeśli informacje nie zostały otrzymane, wyświetlany jest komunikat o braku informacji.