import { Container, Heading, Box, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { getAllPosts, getPostBySlug } from '../../lib/blogs'

const BlogPost = ({ title, date, contentHtml }) => {
  const proseColor = useColorModeValue('gray.800', 'gray.100')
  const dateColor = useColorModeValue('gray.500', 'gray.400')
  const codeBg = useColorModeValue('gray.100', 'whiteAlpha.200')
  const preBg = useColorModeValue('gray.100', 'whiteAlpha.100')

  return (
    <Layout title={title}>
      <Container>
        <Text fontSize="sm" color={dateColor} mb={1}>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
        <Heading as="h2" variant="page-title" fontSize="2xl" mb={6}>
          {title}
        </Heading>
        <Box
          color={proseColor}
          fontSize="sm"
          lineHeight="tall"
          sx={{
            'h2, h3, h4': { fontWeight: '600', mt: 6, mb: 2 },
            h2: { fontSize: 'lg' },
            h3: { fontSize: 'md' },
            p: { mb: 4 },
            ul: { pl: 5, mb: 4 },
            ol: { pl: 5, mb: 4 },
            li: { mb: 1 },
            a: { color: 'blue.400', textDecoration: 'underline' },
            code: {
              bg: codeBg,
              px: 1,
              borderRadius: 'sm',
              fontSize: 'xs',
              fontFamily: 'mono'
            },
            pre: {
              bg: preBg,
              p: 4,
              borderRadius: 'md',
              overflowX: 'auto',
              mb: 4,
              fontSize: 'xs',
              fontFamily: 'mono'
            }
          }}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: post }
}

export default BlogPost
