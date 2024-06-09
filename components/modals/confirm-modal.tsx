import { useConfirmModal } from "@/lib/providers/confirm-modal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog"
import { Button } from "../ui/button"

const ConfirmModal = () => {
  const { open, setOpen } = useConfirmModal()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white dark:bg-black">
        <DialogHeader>{/* {data.title} */}</DialogHeader>
        <DialogDescription>{/* {data.description} */}</DialogDescription>
        <div className="mt-4 flex flex-row justify-between">
          <Button
            //   onClick={handleClose}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
          //   onClick={handleConfirm} variant={data.variant || "super"}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
