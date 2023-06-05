class Noticia {
constructor(id, urlImage, titulo, notica, urlNoticia) {
  this.id = id;
  this.urlImage = urlImage;
  this.titulo = titulo;
  this.notica = notica;
  this.urlNoticia = urlNoticia;        
}
}
export const Noticias = [
  new Noticia(1, fotoQualquer, "Titulo", "Noticia", "urlNoticia"),
  new Noticia(2, fotoQualquer, "Titulo", "Noticia", "urlNoticia"),
  new Noticia(3, fotoQualquer, "Titulo", "Noticia", "urlNoticia"),
  new Noticia(4, fotoQualquer, "Titulo", "Noticia", "urlNoticia"),
  new Noticia(5, fotoQualquer, "Titulo", "Noticia", "urlNoticia"),
  new Noticia(6, fotoQualquer, "Titulo", "Noticia", "urlNoticia")
];
  