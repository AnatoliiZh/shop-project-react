import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    min: number
}
const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    min,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count <= min}
            >
                -
            </Button>
            <TextField value={count} size="small" />
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
