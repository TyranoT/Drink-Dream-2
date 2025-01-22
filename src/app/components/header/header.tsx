'use client';
import { Checkbox, Image, Input } from "@heroui/react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignIn = z.object({
    email: z.string().email(),
    password: z.string().min(4),
});

type SignInType = z.infer<typeof SignIn>;

export default function Header() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isExibir, setIsExibir] = useState<boolean>(false);
    const [contentPass, setContentPass] = useState<string>('');
    const {
        register,
    } = useForm<SignInType>({
        resolver: zodResolver(SignIn),
    });

    return (
        <header className="flex flex-row w-full p-10 bg-white shadow-md">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <Image alt="Logo Drink Dream" src="images/drink_logo.png" className="w-32 h-32 rounded-full object-cover" />
                    <h1 className="text-3xl font-bold text-black">
                        Drink Dream
                        <p className="text-sm">Seu sonho em uma bebida</p>
                    </h1>
                </div>
                <nav>
                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="#" className="text-lg font-medium text-gray-600 hover:text-gray-900">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg font-medium text-gray-600 hover:text-gray-900">Blog</a>
                        </li>
                        <li>
                            <Button color="warning" variant="shadow" className="font-semibold text-white" onPress={onOpen}>Sign-In</Button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col mb-5 gap-1 text-3xl text-zinc-700">Sign-In | Login</ModalHeader>
                            <form>
                                <ModalBody>
                                    <Input
                                        label="Email"
                                        type="email"
                                        {...register("email")}
                                        color="default"
                                        classNames={{
                                            inputWrapper: 'text-black'
                                        }}
                                        variant="bordered"
                                    />
                                    <Input
                                        label="Password"
                                        type="password"
                                        {...register("password")}
                                        color="default"
                                        classNames={{
                                            inputWrapper: 'text-black'
                                        }}
                                        variant="bordered"
                                        value={contentPass}
                                        onValueChange={(value) => setContentPass(value)}
                                        description={isExibir ? contentPass : ''}
                                    />
                                    <span
                                        className="flex flex-row justify-between w-full"
                                    >
                                        <Checkbox
                                            isSelected={isExibir}
                                            onValueChange={setIsExibir}
                                            color="primary"
                                            classNames={{
                                                label: "text-zinc-700"
                                            }}
                                        >
                                            Exibir senha
                                        </Checkbox>
                                        <Button
                                            variant="light"
                                        >
                                            Register
                                        </Button>
                                    </span>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Fechar
                                    </Button>
                                    <Button color="primary" type="submit" onPress={onClose}>
                                        Logar
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </header>
    )
}