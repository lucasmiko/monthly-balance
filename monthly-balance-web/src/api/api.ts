import { ExampleData } from "../models/example";
import apiDataService from "../api/axios";

export async function getExampleData(): Promise<ExampleData[]> {
  const response = await apiDataService.get<ExampleData[]>("/api/example");
  return response.data;
}

