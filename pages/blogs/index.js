import NextLink from 'next/link'
import { Container, Heading, Box, Link, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { getAllPosts } from '../../lib/blogs'

const PostCard = ({ slug, title, date, description }) => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.50')
  const dateColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Link
      as={NextLink}
      href={`/blogs/${slug}`}
      _hover={{ textDecoration: 'none' }}
      display="block"
    >
      <Box
        p={4}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="md"
        _hover={{ bg: hoverBg }}
        transition="background 0.15s"
      >
        <Text fontSize="sm" color={dateColor} mb={1}>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
        <Text fontWeight="600" mb={1}>
          {title}
        </Text>
        {description && (
          <Text fontSize="sm" color={dateColor}>
            {description}
          </Text>
        )}
      </Box>
    </Link>
  )
}

const Blogs = ({ posts }) => (
  <Layout title="Blogs">
    <Container>
      <Heading as="h3" variant="section-title" mb={4}>
        Blogs
      </Heading>
      <Section delay={0.1}>
        <Stack spacing={3}>
          {posts.length === 0 && (
            <Text fontSize="sm" color="gray.500">
              Chưa có bài viết nào.
            </Text>
          )}
          {posts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </Stack>
      </Section>
    </Container>
  </Layout>
)

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}

export default Blogs
