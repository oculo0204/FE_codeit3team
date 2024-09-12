import classNames from 'classnames/bind'
import styles from './PostCard.module.scss'
import { Post } from '@services/api/types'
import Image from 'next/image'
import Icon from '../icon/Icon'
import formatLikeCount from '../util-util/formatLikeCount'
import Link from 'next/link'
import { format, isValid } from 'date-fns'

const cx = classNames.bind(styles)

type PostCardProps = {
  card: Post
}

const PostCard = ({ card }: PostCardProps) => {
  const {
    id,
    nickname,
    isPublic,
    title,
    tags = [],
    location = '',
    moment = '',
    commentCount = 0,
    likeCount = 0,
    imageUrl = '/images/default-image.svg',
  } = card

  // 이미지 URL이 null일 경우 기본 이미지 URL 사용
  const imageSrc = imageUrl || '/images/default-image.svg'
  
  // moment가 유효한 날짜 문자열인지 확인하고, 그렇지 않으면 현재 날짜를 사용
  const formattedDate = (() => {
    const date = moment ? new Date(moment) : new Date() // moment가 null일 경우 현재 날짜 사용
    return isValid(date) ? format(date, 'yy.MM.dd') : '' // 유효한 날짜만 포맷
  })()

  // 필수 데이터가 모두 존재하는지 확인
  if (!nickname || !title) {
    return null // 데이터가 부족하면 컴포넌트를 렌더링하지 않음
  }

  return (
    <div className={cx('container')}>
      {isPublic && (
        <Link href={`/posts/${id}`}>
          <Image
            className={cx('image')}
            src={imageSrc}
            width={335}
            height={335}
            alt='그룹 사진'
            priority
          />
        </Link>
      )}
      <div className={cx('contentContainer')}>
        <div className={cx('header')}>
          <div className={cx('nickname')}>{nickname}</div>
          <span className={cx('verticalLine')}>|</span>
          <div className={cx('isPublic')}>{isPublic ? '공개' : '비공개'}</div>
        </div>
        <div className={cx('body')}>
          <Link href={`/posts/${id}`}>
            <h3 className={cx('title')}>{title}</h3>
          </Link>
          {isPublic && (
            <div className={cx('tagsContainer')}>
              {tags.map((tag, idx) => (
                <div key={idx} className={cx('tag')}>
                  {`#${tag}`}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={cx('footer')}>
          {isPublic && (
            <div className={cx('mapInfo')}>
              {`${location}  ·  ${formattedDate}`}
            </div>
          )}
          <div className={cx('countInfo')}>
            <div className={cx('countContainer')}>
              <Icon name='flower' width={18} height={18} alt='꽃' />
              <div className={cx('count')}>{formatLikeCount(likeCount)}</div>
            </div>
            <div className={cx('countContainer')}>
              <Icon name='bubble' width={18} height={18} alt='말풍선' />
              <div className={cx('count')}>{commentCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
