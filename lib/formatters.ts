/**
 * Formats a date string into localized format
 * @param dateString - ISO date string or null
 * @returns Formatted date string or N/A if invalid
 */
export const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric", 
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.error("Invalid date format:", error);
      return 'N/A';
    }
  };
  
  /**
   * Extracts initials from a user's name
   * @param name - User's full name
   * @returns Up to 2 capital letter initials or empty string if name is invalid
   */
  export const getInitials = (name: string | null): string => {
    if (!name) return '';
    return name
      .split(" ")
      .filter(Boolean) // Filter out empty parts
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };