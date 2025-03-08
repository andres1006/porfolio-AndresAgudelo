"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  FileText,
  Mail,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Todos los items de navegación
const allNavItems = [
  { name: "Inicio", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "Sobre Mí", path: "/about", icon: <User className="h-4 w-4 mr-2" /> },
  {
    name: "Habilidades",
    path: "/skills",
    icon: <Code className="h-4 w-4 mr-2" />,
  },
  {
    name: "Experiencia",
    path: "/experience",
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  {
    name: "Proyectos",
    path: "/projects",
    icon: <Briefcase className="h-4 w-4 mr-2" />,
  },
  { name: "Blog", path: "/blog", icon: <FileText className="h-4 w-4 mr-2" /> },
  {
    name: "Contacto",
    path: "/contact",
    icon: <Mail className="h-4 w-4 mr-2" />,
  },
];

// Items principales que siempre se muestran en desktop
const mainNavItems = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/projects" },
  { name: "Contacto", path: "/contact" },
];

// Items que van en el dropdown en desktop
const dropdownNavItems = allNavItems.filter(
  (item) => !mainNavItems.some((mainItem) => mainItem.path === item.path)
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl whitespace-nowrap">
            AndrésAgudelo.dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {/* Principales items de navegación */}
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
                pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown para el resto de items */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                Más <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {dropdownNavItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link
                    href={item.path}
                    className={cn(
                      "flex items-center w-full",
                      pathname === item.path ? "text-primary" : ""
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-1">
            {allNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-muted",
                  pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
