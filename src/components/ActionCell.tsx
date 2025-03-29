import useUserStore from "@/store/useUserStore";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { IconDotsVertical } from "@tabler/icons-react";
import EditUserModal from "@/modals/EditUserModal";

const ActionCell = ({
  row,
}: {
  row: Row<{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }>;
}) => {
  const { setEditUserModal, deleteUser } = useUserStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
          size="icon"
        >
          <IconDotsVertical />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <EditUserModal
          id={row.original.id}
          email={row.original.email}
          first_name={row.original.first_name}
          last_name={row.original.last_name}
        >
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setEditUserModal(true);
            }}
          >
            Edit user
          </DropdownMenuItem>
        </EditUserModal>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => deleteUser({ id: row.original.id })}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionCell;
