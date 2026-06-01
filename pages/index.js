import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Flex,
  Button,
  List,
  ListItem,
  UnorderedList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const PublicationItem = ({ title, authors, venue, year, doi }) => {
  const mutedColor = useColorModeValue('gray.500', 'gray.500')
  const subColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <Box mb={4} fontSize="sm">
      <Text fontWeight="500">{title}</Text>
      {authors && (
        <Text color={mutedColor} fontSize="xs">
          {authors}
        </Text>
      )}
      <Text color={subColor}>
        {venue} &middot; {year}
      </Text>
      {doi && (
        <Text color={mutedColor} fontSize="xs">
          DOI:{' '}
          <Link href={`https://doi.org/${doi}`} target="_blank">
            {doi}
          </Link>
        </Text>
      )}
    </Box>
  )
}

const ProjectItem = ({ title, period, tags, items }) => {
  const mutedColor = useColorModeValue('gray.500', 'gray.500')
  const accentColor = useColorModeValue('#2959aa', '#82aaff')
  const descColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <Box mb={6} fontSize="sm">
      <Flex justify="space-between" align="baseline" gap={2} mb={1}>
        <Text fontWeight="700" fontSize="md">
          {title}
        </Text>
        {period && (
          <Text flexShrink={0} fontSize="xs" color={mutedColor}>
            {period}
          </Text>
        )}
      </Flex>
      {tags && (
        <Text
          fontSize="xs"
          fontWeight="600"
          color={accentColor}
          letterSpacing="0.05em"
          mb={2}
        >
          {tags.join(' • ')}
        </Text>
      )}
      {items && items.map((item, i) => (
        <Text key={i} color={descColor} mb={1}>
          &bull; {item}
        </Text>
      ))}
    </Box>
  )
}

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('rgba(196,198,220,0.6)', 'rgba(30,32,48,0.8)')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Hoang, this is my draft website!
      </Box>

      <Box display={{ md: 'flex' }} alignItems="flex-start" gap={8} mb={2}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" mb={1}>
            Huy-Hoang Trinh
          </Heading>
          <Box fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            <Box>Master Student &amp; Teaching Assistant</Box>
            <Box>
              <Link
                as={NextLink}
                href="https://www.hcmus.edu.vn/"
                passHref
                target="_blank"
                fontSize="sm"
              >
                University of Science, VNU-HCM (HCMUS)
              </Link>
            </Box>
          </Box>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }}>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/thh.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a master&apos;s student in Electronics and Telecommunications at{' '}
          <Link
            as={NextLink}
            href="https://www.hcmus.edu.vn/"
            passHref
            target="_blank"
          >
            HCMUS
          </Link>
          , where I also work as a Teaching Assistant. My research sits at the
          intersection of hardware security and computer architecture — focusing
          on Post-Quantum Cryptography, RISC-V SoC design, and lightweight
          hardware accelerators. When I am away from the lab, I value time spent
          with close friends and family.
        </Paragraph>
      </Section>

      <Section delay={0.15}>
        <Heading as="h3" variant="section-title">
          Research Interests
        </Heading>
        <UnorderedList fontSize="sm" spacing={1} pl={2}>
          <ListItem>Post-Quantum Cryptography</ListItem>
          <ListItem>RISC-V SoC Architecture</ListItem>
          <ListItem>Hardware Accelerators</ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
        <PublicationItem
          title="Design a Homogeneous Multi-Core SoC Based on NoC with Lightweight Cryptography Cores in FPGA"
          authors={<><Text as="span" textDecoration="underline">Huy-Hoang Trinh</Text>, Khai-Minh Ma, Tran-Bao-Thuong Cao, Duc-Hung Le</>}
          venue="ATC 2025, Hanoi University of Industry (HaUI)"
          year="2025"
          doi="10.1109/ATC67618.2025.11268635"
        />
        <PublicationItem
          title="ASIC Implementation of A Low-Power Multi-Layer Perceptron Neuron Network for Handwritten Digit Classification on 32nm CMOS Process"
          authors={<>The-Hung Pham, Nguyen-Thien-Bao Tran, Minh-Anh Nguyen, <Text as="span" textDecoration="underline">Huy-Hoang Trinh</Text>, Duc-Hung Le</>}
          venue="MCT4SD 2025, Manila, Philippines (Springer)"
          year="2025"
        />
        <PublicationItem
          title="Thiết kế hệ thống bảo mật dữ liệu dựa trên CPU RISC-V 32-bit trên FPGA và công nghệ SKY130"
          authors={<>Tôn Nữ Tâm Nhi, <Text as="span" textDecoration="underline">Trịnh Huy Hoàng</Text>, Mã Khải Minh, Lê Đức Hùng</>}
          venue="REV-ECIT 2024, Đại học Phenikaa"
          year="2024"
        />
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <ProjectItem
          title="Multi-core SoC based on NoC"
          period="2025"
          tags={['RISC-V', 'NETWORK-ON-CHIP', 'LIGHTWEIGHT CRYPTOGRAPHY', 'FPGA']}
          items={[
            'Designing a homogeneous multi-core system with four 64-bit Rocket cores on the VC707 FPGA.',
            'Integrating lightweight cryptographic accelerators as custom MMIO peripherals.',
            'Implementing a Network-on-Chip (NoC) fabric for scalable inter-core communication.',
          ]}
        />
        <ProjectItem
          title="32-bit RISC-V SoC on FPGA"
          period="2024"
          tags={['RISC-V', 'LIGHTWEIGHT CRYPTOGRAPHY', 'FPGA']}
          items={[
            'Integrated a VexRiscv soft-core processor with lightweight cryptographic accelerators on the DE0-Nano FPGA.',
            'Implemented hardware cores for the KLEIN block cipher and BLAKE2s hash function.',
            'Verified end-to-end functionality through bare-metal C firmware running on the soft core.',
          ]}
        />
        <ProjectItem
          title="KLEIN Cryptographic Accelerator"
          period="2024"
          tags={['LIGHTWEIGHT CRYPTOGRAPHY', 'HARDWARE DESIGN']}
          items={[
            'Studied the KLEIN lightweight block cipher algorithm from primary literature.',
            'Implemented the encryption/decryption datapath and testbench in Verilog HDL.',
            'Verified functional correctness using ModelSim simulation.',
          ]}
        />
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2018–2021</BioYear>
          Studied at Nguyen Huu Huan High School, Ho Chi Minh City.
        </BioSection>
        <BioSection>
          <BioYear>2021–2025</BioYear>
          B.Sc. in Electronics and Telecommunications, HCMUS.
        </BioSection>
        <BioSection>
          <BioYear>2025–present</BioYear>
          Master&apos;s student &amp; Teaching Assistant, HCMUS.
        </BioSection>
      </Section>

      <Section delay={0.35}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List spacing={1}>
          <ListItem>
            <Link href="https://github.com/thhoanq" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
                size="sm"
                px={2}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
