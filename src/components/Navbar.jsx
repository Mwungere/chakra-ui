import { Box, Flex } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <Flex bg={"gray.200"} justify={"space-between"} wrap={"wrap"} gap={2}>
        <Box w={"150px"} h={"50px"} bg={"red"}>1</Box>
        <Box w={"150px"} h={"50px"} bg={"blue"}>2</Box>
        <Box w={"150px"} h={"50px"} bg={"green"} flexGrow={"1"}>3</Box>
        <Box w={"150px"} h={"50px"} bg={"yellow"}>4</Box>
    </Flex>
  )
}
