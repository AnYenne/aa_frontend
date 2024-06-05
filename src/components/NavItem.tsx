"use client";
import { useContext, useEffect, useState } from "react";
import { Icons } from "./Icons";
import ModalAccount from "./ModalAccount";
import { Button } from "./ui/button";
import { PcCaseIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {}

function NavItem({}: NavItemProps) {
    const [activeModal, setActiveModal] = useState(false);
    const [quantity, setQuantity]= useState(0)
    const [authorize, setAuthorize]= useState(false)
    const handleClick = () => {
        setActiveModal(!activeModal);
    };
    const handleClose = (closeParen) => {
        setActiveModal(closeParen);
    };
    const getMethodCart = () => {
        fetch('http://localhost:8001/v1/cart_item/list')
        .then(respone => respone.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log('error gi do', error)
        })
    }
    const PostMethodCart = () => {
        const requestData = {
            key1: 'value1',
            key2: 'value2'
          };
          
          fetch('https://api.example.com/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
          })
          .then(response => response.json())
          .then(data => {
            console.log(data); // Response từ API sau khi tạo
          })
          .catch(error => {
            console.error('Error creating data:', error);
          });
    }
    const putMethodCart = () => {
        const updateData = {
            key1: 'new value1',
            key2: 'new value2'
          };
          
          fetch('https://api.example.com/update', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
          })
          .then(response => response.json())
          .then(data => {
            console.log(data); // Response từ API sau khi cập nhật
          })
          .catch(error => {
            console.error('Error updating data:', error);
          });
          
    }
    const DeleteMethodCart = () => {
        fetch('https://api.example.com/delete/123', {
             method: 'DELETE'})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to delete data');
  }
  console.log('Data deleted successfully');
})
.catch(error => {
  console.error('Error deleting data:', error);
});

    }
    useEffect(getMethodCart,[])

    return (
        <div>
            <div>
                <div className="text-yellow-600 text-xs">
                    <Button className="" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.notification />
                            <p className="text-xs">Thông báo</p>
                        </div>
                    </Button>
                    <Button onClick={handleClick} className="" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.account />
                            <p className="text-xs">Tài Khoản</p>
                        </div>
                    </Button>
                   

                    <Button className="-mr-4" variant="ghost">
                        <div className="flex flex-col items-center">
                            <Icons.cart />
                            <Link href="/cart">
                                <p className="text-xs">Giỏ hàng {!authorize && quantity }</p>
                            </Link>
                        </div>
                    </Button>
                </div>
            </div>
            {activeModal && (
                <div className="">
                    <ModalAccount close={handleClose} />
                </div>
            )}
        </div>
    );
}

export default NavItem;
