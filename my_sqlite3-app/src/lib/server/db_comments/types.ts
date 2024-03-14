// export type SessionInfo = {
// 	username: string;
// 	roles: string[];
// };

// export type SessionInfoCache = SessionInfo & {
// 	invalidAt: number;
// };



///////////////////////////////////

/*
// Define a custom type for a track
type Track = {
    TrackId: number;
    Name: string;
    AlbumId?: number; // Optional album ID
    MediaTypeId: number;
    GenreId?: number; // Optional genre ID
    Composer?: string; // Optional composer
    Milliseconds: number;
    Bytes?: number; // Optional track size in bytes
    UnitPrice: number;
};

// Example usage:
const myTrack: Track = {
    TrackId: 1,
    Name: "Smooth Jazz",
    MediaTypeId: 2,
    Milliseconds: 240000,
    UnitPrice: 9.99,
};
span_u_cbox_date
*/
export type Comment = {
    span_u_cbox_contents_a: string;
    span_u_cbox_date: Date;
    div_u_cbox_orgsource_a: string;
    div_u_cbox_orgsource_image_img: string;
    strong_u_cbox_orgsource_header: string;
    span_u_cbox_orgsource_name: string;
};
///////////////////////////////////

// export type Album = {
// 	albumId: number;
// 	albumTitle: string;
// 	artistId: number;
// 	artistName: string;
// 	imgName?: string;
// };

// export type AlbumTrack = {
// 	trackId: number;
// 	trackName: string;
// 	trackMs: number;
// 	composer: string;
// 	genre: string;
// };

// export type Genre = { genreId: number; genreName: string };

// export type TracksGridSaveData = {
// 	deleted?: number[];
// 	rows?: AlbumTrack[];
// 	albumId: number;
// };

// export type AlbumImage = {
// 	filename: string;
// 	mimeType: string;
// 	lastModified: number;
// 	size: number;
// 	data: Blob;
// };

// export type Invoice = {
// 	id: number;
// 	date: string;
// 	address: string;
// 	city: string;
// 	state: string;
// 	country: string;
// 	postalCode: string;
// 	total: number;
// 	customer: string;
// };

// export type PlaylistTrack = {
// 	rowId: number;
// 	playlistId: number;
// 	playlistName: string;
// 	trackName: string;
// 	artistName: string;
// 	genre?: string;
// };

// export type PlaylistTrackResponse = {
// 	rows: PlaylistTrack[];
// 	count: number;
// };

// export type GenreSales = { genre: string; salesTotal: number };

// export type CustomersByCountry = { country: string; customerCount: number };

// export type TracksByMediaType = { mediaType: string; trackCount: number };

// export type SalesTotalByMonth = { month: string; salesTotal: number };
