import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
	const posts = await getCollection('tips')
	return rss({
		// `<title>` campo en el xml generado
		title: 'Ameth’s Blog',
		// `<description>` campo en el xml generado
		description: 'My first blog',
		// Usa el "site" desde el contexto del endpoint
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site,
		// Array de `<item>`s en el xml generado
		// Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
		items: posts.map((post) => ({
			...post.data,
			link: `/post/${post.slug}/`,
		})),
	})
}
