export type Props = {
  title: string,
  img: string | null | undefined,
  release_date: string,
  vote_average: Number,
  onPress: (e: any) => void,
}