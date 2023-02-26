import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react";





function CartToast({ handleAddToCart }) {
    const toast = useToast()
    const statuses = 'ADDED TO BAG'

    const handleToast = () => {
        toast({
            title: `${statuses}`,
            status: statuses,
            isClosable: true,
        })
    }

    return (
        <Wrap>
            <WrapItem>
                <Button
                    onClick={() => [handleAddToCart()]}
                    size="lg"
                    colorScheme={"pink"}
                >
                    ADD TO BAG
                </Button>
            </WrapItem>
        </Wrap>
    )
}

export default CartToast;