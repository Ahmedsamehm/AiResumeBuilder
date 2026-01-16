export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      Education: {
        Row: {
          degree: string | null
          diploma: string
          diplomadate: string | null
          diplomaLink: string
          graduationyear: string | null
          id: number
          location: string | null
          resume_id: string | null
          university: string
        }
        Insert: {
          degree?: string | null
          diploma?: string
          diplomadate?: string | null
          diplomaLink?: string
          graduationyear?: string | null
          id?: number
          location?: string | null
          resume_id?: string | null
          university: string
        }
        Update: {
          degree?: string | null
          diploma?: string
          diplomadate?: string | null
          diplomaLink?: string
          graduationyear?: string | null
          id?: number
          location?: string | null
          resume_id?: string | null
          university?: string
        }
        Relationships: [
          {
            foreignKeyName: "Education_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: true
            referencedRelation: "Resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      Experience: {
        Row: {
          company: string | null
          description: string | null
          end_date: string | null
          id: number
          location: string | null
          resume_id: string | null
          start_date: string | null
          title: string | null
        }
        Insert: {
          company?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          location?: string | null
          resume_id?: string | null
          start_date?: string | null
          title?: string | null
        }
        Update: {
          company?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          location?: string | null
          resume_id?: string | null
          start_date?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Experience_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "Resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      PersonalInformation: {
        Row: {
          address: string | null
          email: string | null
          fullName: string
          github: string
          id: number
          linkedIn: string | null
          phone: number | null
          portfolio: string
          position: string | null
          resume_id: string | null
          summary: string | null
        }
        Insert: {
          address?: string | null
          email?: string | null
          fullName: string
          github?: string
          id?: number
          linkedIn?: string | null
          phone?: number | null
          portfolio?: string
          position?: string | null
          resume_id?: string | null
          summary?: string | null
        }
        Update: {
          address?: string | null
          email?: string | null
          fullName?: string
          github?: string
          id?: number
          linkedIn?: string | null
          phone?: number | null
          portfolio?: string
          position?: string | null
          resume_id?: string | null
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "PersonalInformation_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: true
            referencedRelation: "Resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      Projects: {
        Row: {
          duration: string | null
          github: string
          id: number
          projectDetails: string | null
          projectTitle: string
          resume_id: string
          technologiesUsed: string | null
        }
        Insert: {
          duration?: string | null
          github?: string
          id?: number
          projectDetails?: string | null
          projectTitle?: string
          resume_id: string
          technologiesUsed?: string | null
        }
        Update: {
          duration?: string | null
          github?: string
          id?: number
          projectDetails?: string | null
          projectTitle?: string
          resume_id?: string
          technologiesUsed?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Projects_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "Resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      Resumes: {
        Row: {
          created_at: string | null
          id: string
          title: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          title?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          title?: string | null
          user_id?: string
        }
        Relationships: []
      }
      Skills: {
        Row: {
          frameworksTools: string
          id: number
          programmingLanguages: string
          resume_id: string | null
          technologies: string
        }
        Insert: {
          frameworksTools?: string
          id?: number
          programmingLanguages?: string
          resume_id?: string | null
          technologies?: string
        }
        Update: {
          frameworksTools?: string
          id?: number
          programmingLanguages?: string
          resume_id?: string | null
          technologies?: string
        }
        Relationships: [
          {
            foreignKeyName: "Skills_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: true
            referencedRelation: "Resumes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
